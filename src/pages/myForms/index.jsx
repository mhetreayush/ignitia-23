import PageWrapper from "@/components/PageWrapper";
import { db } from "@/../firebase";
import { doc, getDoc } from "firebase/firestore";
import Link from "next/link";
import { useEffect, useState } from "react";

const Index = () => {
  const [forms, setForms] = useState([]);
  const fetchForms = async () => {
    const user = JSON.parse(localStorage.getItem("user")).uid;
    const formsRef = doc(db, "users", user);
    const formsSnap = await getDoc(formsRef);
    if (formsSnap.exists()) {
      setForms(formsSnap.data().forms);
      console.log(formsSnap.data().forms);
    }
  };
  useEffect(() => {
    fetchForms();
  }, []);
  return (
    <PageWrapper>
      <div className="flex flex-col gap-y-4 w-full">
        {forms.map((form, idx) => {
          return (
            <Link key={idx} href={`/myForms/${form.id}`}>
              {form.title}
            </Link>
          );
        })}
      </div>
    </PageWrapper>
  );
};

export default Index;
