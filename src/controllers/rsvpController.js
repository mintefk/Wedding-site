import { supabase } from "../supabaseClient";

export const handleRSVPSubmit = async (formData, resetForm) => {
  const { error } = await supabase
    .from("rsvps")
    .insert([{ name: formData.name, guests: formData.guests }]);

  if (error) {
    alert("Error submitting RSVP");
  } else {
    alert("RSVP submitted successfully!");
    resetForm();
  }
};