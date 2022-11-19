import { component$ } from "@builder.io/qwik";
import { LoginForm } from "./components/LoginForm";
import HeadlessLink from "./components/headless/HeadlessLink/HeadlessLink";

export const Root = component$(() => {
  return <>
    <LoginForm />;
    <HeadlessLink href={'/sample'}>to Sample</HeadlessLink>
  </>
});
