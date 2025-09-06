import { useEffect, useState } from "react";
import CodeBlock from "@theme/CodeBlock";

function getCacheKey(groupId, artifactId) {
  return `version_${groupId}_${artifactId}`;
}

function getCachedVersion(groupId, artifactId) {
  if (typeof window !== "undefined") {
    return localStorage.getItem(getCacheKey(groupId, artifactId));
  }
  return null;
}

function setCachedVersion(groupId, artifactId, version) {
  if (typeof window !== "undefined") {
    localStorage.setItem(getCacheKey(groupId, artifactId), version);
  }
}

export default function FetchVersion({
  type = "maven", // 'maven', 'gradle-groovy', 'gradle-kts'
  groupId = "com.jodexindustries.donatecase",
  artifactId = "api",
  implementation = false, // Gradle: implementation/compileOnly, Maven: compile/provided
}) {
  const [version, setVersion] = useState(() => {
    return getCachedVersion(groupId, artifactId) || "loading";
  });

  useEffect(() => {
    if (version !== "loading") return;

    async function fetchVersion() {
      try {
        const groupPath = groupId.replace(/\./g, "/");
        const response = await fetch(
          `https://repo.jodex.xyz/api/maven/latest/version/releases/${groupPath}/${artifactId}?type=raw`
        );
        const data = await response.text();
        const fetchedVersion = data.trim();

        setVersion(fetchedVersion);
        setCachedVersion(groupId, artifactId, fetchedVersion);
      } catch (error) {
        console.error(error);
        setVersion("Error fetching version");
      }
    }

    fetchVersion();
  }, [artifactId, groupId]);

  const dependencyType = implementation ? "implementation" : "compileOnly";
  const mavenScope = implementation ? "compile" : "provided";

  let dependency;
  let language;

  switch (type) {
    case "gradle-groovy":
      dependency = `dependencies {
    ${dependencyType}("${groupId}:${artifactId}:${version}")
}`;
      language = "groovy";
      break;

    case "gradle-kts":
      dependency = `dependencies {
    ${dependencyType}("${groupId}:${artifactId}:${version}")
}`;
      language = "kotlin";
      break;

    case "maven":
    default:
      dependency = `<dependency>
    <groupId>${groupId}</groupId>
    <artifactId>${artifactId}</artifactId>
    <version>${version}</version>
    <scope>${mavenScope}</scope>
</dependency>`;
      language = "xml";
  }

  return <CodeBlock language={language}>{dependency}</CodeBlock>;
}
