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
  groupId = "com.github.Jodexx",
  projectId = "DonateCase",
  artifactId = "api",
  implementation = false, // Gradle: implementation/compileOnly, Maven: compile/provided
}) {
  const allGroupId = groupId + "." + projectId;

  const [version, setVersion] = useState(() => {
    return getCachedVersion(allGroupId, artifactId) || "loading";
  });

  useEffect(() => {
    if (version !== "loading") return;

    async function fetchVersion() {
      try {
        const response = await fetch(
          `https://jitpack.io/api/builds/${groupId}/${projectId}/latest`
        );
        const data = await response.json();
        const fetchedVersion = data.version.trim();

        setVersion(fetchedVersion);
        setCachedVersion(allGroupId, artifactId, fetchedVersion);
      } catch (error) {
        console.error(error);
        setVersion("Error fetching version");
      }
    }

    fetchVersion();
  }, [groupId, projectId, artifactId, allGroupId, version]);

  const dependencyType = implementation ? "implementation" : "compileOnly";
  const mavenScope = implementation ? "compile" : "provided";

  let dependency;
  let language;

  switch (type) {
    case "gradle-groovy":
      dependency = `dependencies {
    ${dependencyType}("${allGroupId}:${artifactId}:${version}")
}`;
      language = "groovy";
      break;

    case "gradle-kts":
      dependency = `dependencies {
    ${dependencyType}("${allGroupId}:${artifactId}:${version}")
}`;
      language = "kotlin";
      break;

    case "maven":
    default:
      dependency = `<dependency>
    <groupId>${allGroupId}</groupId>
    <artifactId>${artifactId}</artifactId>
    <version>${version}</version>
    <scope>${mavenScope}</scope>
</dependency>`;
      language = "xml";
  }

  return <CodeBlock language={language}>{dependency}</CodeBlock>;
}
