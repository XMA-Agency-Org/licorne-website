export const SERVICE_CATEGORIES = [
  { title: "Company Setup", value: "company-setup" },
  { title: "License Services", value: "license-services" },
  { title: "Visa & Immigration", value: "visa-immigration" },
  { title: "Finance & Banking", value: "finance-banking" },
  { title: "PRO & Government Services", value: "pro-government" },
  { title: "Notary Services", value: "notary-services" },
];

export const serviceCategoryTitle = (value?: string) =>
  SERVICE_CATEGORIES.find((category) => category.value === value)?.title ?? "No category";
