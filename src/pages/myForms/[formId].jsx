import { doc, getDoc } from "firebase/firestore";
import { db } from "@/../firebase";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { QuestionSection } from "../idea/[ideaId]";

const Index = () => {
  const { formId } = useRouter().query;
  const [form, setForm] = useState(null);
  const [responses, setResponses] = useState(null);
  const fetchForm = async () => {
    const formsRef = doc(db, "forms", formId);
    const formsSnap = await getDoc(formsRef);
    if (formsSnap.exists()) {
      setForm(formsSnap.data());
      setResponses(JSON.parse(formsSnap.data().responses));
    }
  };
  useEffect(() => {
    formId && fetchForm();
  }, [formId]);

  return (
    <div>
      {form?.data && <QuestionSection data={form.data} responses={responses} />}
    </div>
  );
};

export default Index;
