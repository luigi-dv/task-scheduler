import { API_UPDATE_USER_INFORMATION_ROUTE } from "@/routes";

export const handleUserInformationFormSubmit = async (
  name: string,
  surname: string,
  country: string,
) => {
  const formData = new FormData();

  formData.append("name", name);
  formData.append("surname", surname);
  formData.append("country", country);

  return await fetch(API_UPDATE_USER_INFORMATION_ROUTE, {
    method: "POST",
    body: formData,
  });
};
