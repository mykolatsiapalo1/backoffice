import { IField } from "@/types/forms/forms";
import { create } from "zustand";
import { IForm } from "@/types/forms/forms";
import FormService from "@/services/form-service";

interface CreationFormState {
  form: IForm;
  setFields: (fields: IField[]) => void;
  setName: (name: string) => void;
  setDescription: (description: string) => void;
  saveForm: () => void;
  reset: () => void;
}

export const useCreationFormStore = create<CreationFormState>((set, get) => ({
  form: {
    name: "Your Creation Form",
    description: "Your Creation Form Description",
    fields: [],
  },
  saveForm: async () => {
    const form = get().form;
    const response = await FormService.saveForm(form);
    console.log(response);
  },
  setFields: (fields) => set((state) => ({ form: { ...state.form, fields } })),
  setName: (name) => set((state) => ({ form: { ...state.form, name } })),
  setDescription: (description) => set((state) => ({ form: { ...state.form, description } })),
  reset: () => set({ form: { name: "", description: "", fields: [] } }),
}));
