"use server";

import { supabase } from "@/lib/supabaseClient";

export type WaitlistInput = {
  name: string;
  email: string;
  source: string;
  platform: string;
  notes?: string;
};

export async function joinWaitlist(input: WaitlistInput) {
  const { name, email, source, platform, notes } = input;

  // Server-side validation
  if (!name || name.trim() === "") {
    return { success: false, error: "Name is required." };
  }

  if (!email || email.trim() === "" || !email.includes("@")) {
    return { success: false, error: "Please provide a valid email address." };
  }

  if (!platform || (platform !== "ios" && platform !== "android")) {
    return { success: false, error: "Please select your mobile operating system." };
  }

  if (!source || source.trim() === "" || source === "select") {
    return { success: false, error: "Please select how you heard about us." };
  }

  const normalizedEmail = email.trim().toLowerCase();

  try {
    // 1. Check if the email already exists to give a nice, friendly message
    const { data: existingEntry, error: checkError } = await supabase
      .from("beta_waitlist")
      .select("id")
      .eq("email", normalizedEmail)
      .maybeSingle();

    if (checkError) {
      console.error("Database check error:", checkError);
    }

    if (existingEntry) {
      return {
        success: true,
        message: "You're already on our early access waitlist! We'll keep you in the loop.",
      };
    }

    // 2. Insert the lead into the database
    const { error: insertError } = await supabase.from("beta_waitlist").insert([
      {
        name: name.trim(),
        email: normalizedEmail,
        source: source.trim(),
        platform: platform,
        additional_notes: notes && notes.trim() !== "" ? notes.trim() : null,
      },
    ]);

    if (insertError) {
      console.error("Database insert error:", insertError);
      return {
        success: false,
        error: "There was a database error. Please try again in a few moments.",
      };
    }

    return {
      success: true,
      message:
        "Thank you! You've been successfully added to the early access waitlist. We will reach out soon!",
    };
  } catch (err: any) {
    console.error("Server action error:", err);
    return {
      success: false,
      error: "Something went wrong. Please try again later.",
    };
  }
}
