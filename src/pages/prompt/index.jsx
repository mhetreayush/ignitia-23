import PageWrapper from "@/components/PageWrapper";
import { generateData } from "@/helpers/generateData";
import { useState } from "react";
import { BsSend } from "react-icons/bs";
const Prompt = () => {
  const [ideas, setIdeas] = useState("");
  const [prompt, setPrompt] = useState("");

  return (
    <PageWrapper>
      <div>
        <div className="flex w-full gap-x-4">
          <input
            className="innerCard w-full"
            type="text"
            placeholder="Enter keywords or phrase about your idea here"
            onChange={(e) => setPrompt(e.target.value)}
          />
          <button onClick={() => generateData(prompt, setIdeas, "ideas")}>
            <BsSend fontSize={32} />
          </button>
        </div>

        {ideas.length > 0 && (
          <div className="flex flex-col w-full gap-y-4 p-4 bg-[#1F1926] rounded-md mt-4">
            {ideas.split("nextIdeaStartsHere").map((idea, idx) => {
              return (
                <div
                  key={idx}
                  className={`flex flex-col w-full gap-y-2 p-4 bg-[#1F1926] rounded-md mt-4`}
                >
                  <div className="innerCard group ">
                    <p className="rounded-md p-2 px-5 bg-[#666666] group-hover:bg-white group-hover:text-black w-fit">
                      Idea {idx + 1}
                    </p>
                    {/* <h1 className="font-semibold text-2xl">Idea {idx + 1}</h1> */}
                    <p>{idea}</p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </PageWrapper>
  );
};

export default Prompt;
