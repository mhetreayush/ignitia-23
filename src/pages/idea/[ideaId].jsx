import { generateData } from "@/helpers/generateData";
import { useRouter } from "next/router";
import { useState } from "react";

const IdeaSection = ({ title, type }) => {
  const [data, setData] = useState(null);

  return (
    <div>
      <h1>{title}:</h1>
      <button
        onClick={() =>
          generateData(
            "E commerce website for custom cricket merchandise",
            setData,
            type
          )
        }
      >
        Generate {title}
      </button>
      {data && <p>{data}</p>}
    </div>
  );
};

const Idea = () => {
  const router = useRouter();
  const { ideaId } = router.query;
  const sections = [
    {
      title: "Problem Statement",
      type: "PS",
    },
    {
      title: "Market Research",
      type: "MR",
    },
    {
      title: "Primary Research",
      type: "PR",
    },
    {
      title: "Secondary Research",
      type: "SR",
    },
    {
      title: "User Persona",
      type: "UP",
    },
    {
      title: "Implementation",
      type: "IM",
    },
    {
      title: "Tech Stack",
      type: "TS",
    },
  ];
  return (
    <div>
      <div>
        <h1>Query:</h1>
      </div>
      {/* <div>
        <h1>Problem Statement:</h1>
        <button>Generate Problem Statement</button>
      </div>
      <div>
        <h1>Market Research:</h1>
        <button>Generate Market Research</button>
      </div>
      <div>
        <h1>Product Research:</h1>
        <button>Generate Product Research</button>
        <div>
          <h1>Primary Research:</h1>
          <button>Generate Primary Research Material</button>
        </div>
        <div>
          <h1>Secondary Research:</h1>
          <button>Generate Secondary Research Material</button>
        </div>
      </div>
      <div>
        <h1>User Persona:</h1>
        <button>Generate User Persona</button>
      </div> */}
      {sections.map((section, idx) => {
        return <IdeaSection key={idx} {...section} />;
      })}

      <div>
        <h1>Implementation:</h1>
        <button>Generate Implementation</button>
      </div>
      <div>
        <h1>Tech Stack:</h1>
        <button>Generate Tech Stack</button>
      </div>
      <div>
        <h1>Future Scope:</h1>
        <button>Generate Future Scope</button>
      </div>
      <div>
        <h1>Target Audience:</h1>
        <button>Generate information about target audience</button>
      </div>
    </div>
  );
};

export default Idea;
