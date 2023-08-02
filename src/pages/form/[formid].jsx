import { db } from "@/../firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import { use, useEffect, useState } from "react";
import { QuestionSection } from "../idea/[ideaId]";

const FormTemplate = () => {
  const router = useRouter();
  const { formid } = router.query;
  const [questionStr, setQuestionStr] = useState("");
  const [initialResponses, setInitialResponses] = useState(null);

  const getForm = async () => {
    try {
      const docRef = doc(db, "forms", formid);
      const docSnap = await getDoc(docRef);
      console.log(docSnap.data());
      setQuestionStr(docSnap.data().data);
      setInitialResponses(JSON.parse(docSnap.data().responses));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getForm();
  }, [formid]);
  return (
    <div className="flex w-full justify-center items-center min-h-screen">
      <div className="innerCard w-[75%]">
        <h1 className="text-center font-extralight">
          Form Generated with the help of{" "}
          <span className="font-bold">ResearchPilot</span>
        </h1>
        {questionStr && (
          <QuestionSection
            data={questionStr}
            initialResponses={initialResponses}
            setInitialResponses={setInitialResponses}
            formId={formid}
          />
        )}
      </div>
    </div>
  );
};

export default FormTemplate;
