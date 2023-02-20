import React, { useState } from "react";
import { FormSet } from "./FormSet";

function Form(handleChange, saveData) {
  return (
    <form onSubmit={handleSubmit}>
      <FormSet />
    </form>
  );
}

export default Form;
