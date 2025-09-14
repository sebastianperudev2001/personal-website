import React from "react";

interface DeveloperData {
  name: string;
  title: string;
  skills: string[];
  location: string;
  email: string;
}

interface CodeSnippetProps {
  developerData: DeveloperData;
}

const CodeSnippet: React.FC<CodeSnippetProps> = ({ developerData }) => {
  return (
    <div className="relative bg-gray-900 rounded-lg p-6 w-full max-w-md font-mono text-sm text-green-400 shadow-xl">
      <div className="mb-4">
        <span className="text-blue-400">const</span>{" "}
        <span className="text-yellow-400">developer</span> = {"{"}
      </div>
      <div className="pl-4">
        <div>
          <span className="text-purple-400">name</span>:{" "}
          <span className="text-orange-400">
            &quot;{developerData.name}&quot;
          </span>
          ,
        </div>
        <div>
          <span className="text-purple-400">title</span>:{" "}
          <span className="text-orange-400">
            &quot;{developerData.title}&quot;
          </span>
          ,
        </div>
        <div>
          <span className="text-purple-400">skills</span>: [
          {developerData.skills.map((skill, index) => (
            <React.Fragment key={skill}>
              <span className="text-orange-400">&quot;{skill}&quot;</span>
              {index < developerData.skills.length - 1 && <span>, </span>}
            </React.Fragment>
          ))}
          ],
        </div>
        <div>
          <span className="text-purple-400">location</span>:{" "}
          <span className="text-orange-400">
            &quot;{developerData.location}&quot;
          </span>
          ,
        </div>
        <div>
          <span className="text-purple-400">email</span>:{" "}
          <span className="text-orange-400">
            &quot;{developerData.email}&quot;
          </span>
        </div>
      </div>
      <div className="mt-4">{"}"}</div>
    </div>
  );
};

export default CodeSnippet;
