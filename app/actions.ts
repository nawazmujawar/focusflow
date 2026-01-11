"use server";
export async function sayHello() {
  console.log("Hello from the server!");
}

export async function submitForm(formData: FormData) {
  const name = formData.get("surname");
  console.log(`Form submitted with name: ${name}`);
}
