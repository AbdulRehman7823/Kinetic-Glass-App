import React from "react";
import {SimpleForm as Form} from "../Components/Form";

export default {
  title: "Form/Contained Form",
  component: Form,
  argTypes: { onClick: { action: "clicked" } },
};

const Template = (args) => {
  return <Form {...args}></Form>;
};

export const SimpleContainedForm = Template.bind({});

SimpleContainedForm.args = {
     props : {
        title: {
          text: "SignUP",
          class: "",
        },
        logo: {
          url: "https://banner2.cleanpng.com/20180715/zio/kisspng-logo-font-flame-logo-5b4b2d7c3b73e0.2237387315316535002435.jpg",
          class: "",
        },
        header: {
          text: "Login To get Access",
          class: "",
        },
        inputs: [
          {
            type: "email",
            title: "Email",
            placeholder: "example@gmail.com",
            class: "",
            error: "Please Enter your Email",
          },
          {
            type: "password",
            title: "Password",
            placeholder: "Password",
            class: "",
            error: "Please Enter your Password",
          },
          
        ],
    
        buttons: [
          {
            text: "Login",
            svg: `
                <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="True">
              <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                </svg>`,
    
            class: "",
            onPress: () => {
              console.log("Login Button Clicked");
            },
          },
          {
            text: "Login with Google",
            svg: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16"> <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/> </svg>`,
            class: "",
            onPress: () => {
              console.log("Google Button Clicked");
            },
          },
          {
            text: "Login with Github",
            svg: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16"> <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/> </svg>`,
            class: "",
            
            onPress: () => {
              console.log("Google Button Clicked");
            },
          },
        ],
      }
};
