/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
      <img
        src="/logo.svg"
        height="100px"
        alt="the fresh logo: a sliced lemon dripping with juice"
      />
      <p class={tw`my-6`}>
        Fresh is a next generation web framework, built for speed, reliability, and simplicity. Some stand out features:

        Just-in-time rendering on the edge.
        Island based client hydration for maximum interactivity.
        Zero runtime overhead: no JS is shipped to the client by default.
        No build step.
        No configuration necessary.
        TypeScript support out of the box.
        Fresh embraces the tried and true design of server side rendering and progressive enhancement on the client side.
      </p>
      <Counter start={3} />
    </div>
  );
}
