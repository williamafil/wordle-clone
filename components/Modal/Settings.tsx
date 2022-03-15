import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationIcon } from "@heroicons/react/outline";

function Settings() {
  return (
    <div className="w-full p-4">
      <h2 className="pt-4 uppercase text-center font-bold">Settings</h2>
      <ul className="mt-10">
        <li className="py-5 border-b border-gray-200 flex justify-between">
          <section>
            <h3>Feedback</h3>
          </section>
          <section>Email</section>
        </li>
        <li className="py-5 border-b border-gray-200 flex justify-between">
          <section>
            <h3>Questions</h3>
          </section>
          <section>FAQ</section>
        </li>
      </ul>
    </div>
  );
}

export default Settings;
