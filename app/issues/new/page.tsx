"use client";
import { Button, TextField } from "@radix-ui/themes";
import React from "react";
import { TextArea } from "@radix-ui/themes";

const NewIssuePage = () => {
  return (
    <div className="max-w-xl space-y-3">
      <TextField.Root placeholder="Search the docs…">
        <TextField.Slot></TextField.Slot>
      </TextField.Root>
      <TextArea placeholder="Reply to comment…" />
      <Button>Submit New Issue</Button>
    </div>
  );
};

export default NewIssuePage;
