import { FormEvent, useEffect, useState } from "react";
import { handleUserInformationFormSubmit } from "@/components/user/SettingsForm/services/handleAccountFormSubmit";
import { fetchUserInformation } from "@/components/user/SettingsForm/services/fetchUserInformation";
import { toast } from "react-toastify";

export const useAccount = (user: any) => {
  const [nameValue, setName] = useState("");
  const [surnameValue, setSurname] = useState("");
  const [emailValue, setEmail] = useState("");
  const [countryValue, setCountry] = useState("");

  const setNameWrapper = (value: string) => {
    setName(value);
  };

  const setSurnameWrapper = (value: string) => {
    setSurname(value);
  };

  const setEmailWrapper = (value: string) => {
    setEmail(value);
  };

  const setCountryWrapper = (value: string) => {
    setCountry(value);
  };

  const getUserInformation = async () => {
    return await fetchUserInformation();
  };

  useEffect(() => {
    const fetchUserData = async () => {
      const userInfo = await getUserInformation();
      setName(userInfo.name);
      setSurname(userInfo.surname);
      setEmail(userInfo.email);
      setCountry(userInfo.country);
    };

    fetchUserData();
  }, []);
  /**
   * Handle the task form submit
   */
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const result = await toast.promise(
      handleUserInformationFormSubmit(nameValue, surnameValue, countryValue),
      {
        pending: "Updating User Information",
        success: "User Information Updated",
        error: "Error Updating User Information",
      },
    );

    if (!result.ok) {
      alert("Error Updating User Information");
    }
  };

  return {
    nameValue,
    setNameWrapper,
    surnameValue,
    setSurnameWrapper,
    emailValue,
    setEmailWrapper,
    countryValue,
    setCountryWrapper,
    handleSubmit,
  };
};
