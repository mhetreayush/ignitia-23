import PageWrapper from "@/components/PageWrapper";
import { generateData } from "@/helpers/generateData";
import { useRouter } from "next/router";
import { useState } from "react";
import { BsCheckSquareFill, BsSquare } from "react-icons/bs";

export const QuestionSection = ({ data }) => {
  const test = `
  {"question": "What is the purpose of an e-commerce website for custom cricket merchandise?", 
  "options": ["To sell cricket merchandise online", "To provide custom cricket merchandise", "To provide information about cricket merchandise", "To provide reviews about cricket merchandise"]}<<<->>>
  
  {"question": "Which of the following is a feature of an e-commerce website for custom cricket merchandise?", 
  "options": ["Secure payment gateway", "Live chat support", "In-store pickup", "Free shipping"]}<<<->>>
  
  {"question": "Which of the following is a benefit of using an e-commerce website for custom cricket merchandise?", 
  "options": ["Convenience", "Lower prices", "Faster delivery", "More selection"]}<<<->>>

  {"question": "What type of products can be found on an e-commerce website for custom cricket merchandise?", 
  "options": ["Clothing", "Equipment", "Accessories", "All of the above"]}<<<->>>
    {"question": "What type of payment methods are accepted on an e-commerce website for custom cricket merchandise?", 
  "options": ["Credit cards", "Debit cards", "PayPal", "All of the above"]}`;

  // console.log(test.split("<<<->>>"));
  // return [test].map((quest, idx) => {
  //   return <h1 key={idx}>{quest}</h1>;
  // });

  // test.split("<<<->>>").map((quest, idx) => {
  //   console.log(JSON.parse(quest).question);
  // });

  return data?.split("<<<->>>").map((quest, idx) => {
    const temp = JSON.parse(quest);
    return (
      <div key={idx}>
        <h1 className="font-bold text-lg">{temp.question}</h1>
        {temp.options.map((opt, idx) => {
          return (
            <>
              <input
                type="radio"
                name={temp.question}
                id={opt}
                value={opt}
                className="mr-2"
              />
              <label htmlFor={opt}>{opt}</label>
              <br />
            </>
          );
        })}
      </div>
    );
  });
  // return test.split("<<<->>>").map((quest, idx) => {
  //   const temp = JSON.parse(quest);
  //   return (
  //     <div key={idx}>
  //       <h1 className="font-bold text-lg">{temp.question}</h1>
  //       {temp.options.map((opt, idx) => {
  //         return (
  //           <>
  //             <input
  //               type="radio"
  //               name={temp.question}
  //               id={opt}
  //               value={opt}
  //               className="mr-2"
  //             />
  //             <label htmlFor={opt}>{opt}</label>
  //             <br />
  //           </>
  //         );
  //       })}
  //     </div>
  //   );
  // });
};
const IdeaSection = ({ title, desc, type }) => {
  const [data, setData] = useState(null);
  const [showDesc, setShowDesc] = useState(true);
  const [isTicked, setIsTicked] = useState(false);
  const [isGenerated, setIsGenerated] = useState(false);
  const { idea } = useRouter().query;
  console.log(idea);
  return (
    <div className="innerCard">
      <div>
        {" "}
        <h1 className="font-semibold text-2xl">{title}</h1>
        {showDesc && <p className="text-gray-400 mt-4">{desc}</p>}
      </div>{" "}
      {type != "PR" && data && <p>{data}</p>}
      {type == "PR" && data && <QuestionSection data={[data]} />}
      <div className="w-full flex justify-between">
        <button
          className="bg-[#5E2A8E] rounded-md py-2 px-6"
          onClick={() => {
            generateData(
              "E commerce website for custom cricket merchandise",
              setData,
              type
            ),
              setShowDesc(false),
              setIsGenerated(true);
            setIsTicked(true);
          }}
        >
          Generate
        </button>
        <button
          disabled={!isGenerated}
          onClick={() => setIsTicked(!isTicked)}
          className="text-2xl disabled:text-gray-700 disabled:cursor-not-allowed"
        >
          {!isTicked ? <BsSquare /> : <BsCheckSquareFill />}
        </button>
      </div>
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
      desc: "Problem statement is a concise description of an issue to be addressed or a condition to be improved upon. It identifies the gap between the current (problem) state and desired (goal) state of a process or product.",
    },
    {
      title: "Market Research",
      type: "MR",
      desc: "Market research is the process of gathering information about your business's buyers personas, target audience, and customers to determine how viable and successful your product or service would be, and/or is, among these people.",
    },
    {
      title: "Primary Research",
      type: "PR",
      desc: "Primary research is research you conduct yourself (or hire someone to do for you.) It involves going directly to a source —usually customers and prospective customers in your target market — to ask questions and gather information.",
    },
    {
      title: "Secondary Research",
      type: "SR",
      desc: "Secondary research is a research method that involves using already existing data. Existing data is summarized and collated to increase the overall effectiveness of research.",
    },
    {
      title: "User Persona",
      type: "UP",
      desc: "A user persona is a fictional representation of your ideal customer. It is based on market research and real data about your existing customers.",
    },
    {
      title: "Implementation",
      type: "IM",
      desc: "Implementation is the carrying out, execution, or practice of a plan, a method, or any design, idea, model, specification, standard or policy for doing something. As such, implementation is the action that must follow any preliminary thinking in order for something to actually happen.",
    },
    {
      title: "Tech Stack",
      type: "TS",
      desc: "A tech stack is defined as the set of technologies an organization uses to build a web or mobile application. It is a combination of programming languages, frameworks, libraries, patterns, servers, UI/UX solutions, software, and tools used by its developers.",
    },
  ];
  return (
    <PageWrapper>
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
      <div className="flex flex-col w-full gap-y-4 p-6 bg-[#1F1926] rounded-md">
        {sections.map((section, idx) => {
          return <IdeaSection key={idx} {...section} />;
        })}
      </div>

      {/* <div>
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
      </div> */}
    </PageWrapper>
  );
};

export default Idea;
