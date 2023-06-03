import { db } from "@/../firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import { use, useEffect, useState } from "react";
import { QuestionSection } from "../idea/[ideaId]";

const FormTemplate = () => {
  const [dbName, setDbName] = useState("");
  const [newName, setNewName] = useState("");
  const router = useRouter();
  const { formid } = router.query;
  const [questionStr, setQuestionStr] = useState("");
  const updateName = async () => {
    try {
      await setDoc(doc(db, "forms", formid), {
        name: newName,
      });
    } catch (err) {
      console.log(err);
    }
    getName();
  };

  const getName = async () => {
    try {
      const docRef = doc(db, "forms", formid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        setQuestionStr(docSnap.data().jsonString);
      } else {
        console.log("No such document!");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getName();
  }, [formid]);
  return <div>{questionStr && <QuestionSection data={questionStr} />}</div>;
};

export default FormTemplate;
