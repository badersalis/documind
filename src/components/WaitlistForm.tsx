"use client";

import Link from "next/link";
import { useActionState, useEffect, useId, useRef, useState } from "react";
import { joinWaitlist } from "@/app/actions";
import { Tick } from "./Wordmark";
import { Button } from "./ui";
import { normaliseWhatsapp, validateEmail, type ErrorKey, type Field, type WaitlistState } from "@/lib/waitlist";
import type { Dictionary } from "@/content";

type Errors = Partial<Record<Field, ErrorKey>>;

export function WaitlistForm({ t }: { t: Dictionary["waitlist"]["form"] }) {
  const [state, action, pending] = useActionState<WaitlistState, FormData>(joinWaitlist, { status: "idle" });
  const [clientErrors, setClientErrors] = useState<Errors>({});
  const [role, setRole] = useState("");
  const [started, setStarted] = useState(0);
  const formRef = useRef<HTMLFormElement>(null);
  const successRef = useRef<HTMLHeadingElement>(null);
  const uid = useId();
  const id = (name: string) => `${uid}-${name}`;

  // Preselect the role from ?role=cabinet (accountant links) and start the fill timer.
  useEffect(() => {
    const fromUrl = new URLSearchParams(window.location.search).get("role");
    // eslint-disable-next-line react-hooks/set-state-in-effect -- reads the URL once after hydration
    if (fromUrl === "cabinet") setRole("cabinet");
    setStarted(Date.now());
  }, []);

  useEffect(() => {
    if (state.status === "success") successRef.current?.focus();
    if (state.status === "error") {
      formRef.current?.querySelector<HTMLElement>("[aria-invalid=true], [data-invalid=true]")?.focus();
    }
  }, [state]);

  const serverErrors: Errors = state.status === "error" ? state.errors : {};
  const errors: Errors = { ...serverErrors, ...clientErrors };

  if (state.status === "success") {
    return (
      <div className="on-paper rounded-lg border border-rule bg-white p-6 text-ink" role="status">
        <div className="flex items-center gap-3">
          <span className="inline-flex size-10 items-center justify-center rounded-full bg-stamp-tint text-stamp">
            <Tick className="h-4 w-5" />
          </span>
          <h3 ref={successRef} tabIndex={-1} className="text-2xl font-bold outline-none">
            {t.successTitle}
          </h3>
        </div>
        <p className="mt-3">{t.successText.replace("{email}", state.email)}</p>
      </div>
    );
  }

  const checkField = (name: "email" | "whatsapp", value: string) => {
    const err = name === "email" ? validateEmail(value) : normaliseWhatsapp(value) === null ? "whatsappInvalid" : null;
    setClientErrors((prev) => {
      const next = { ...prev };
      if (err) next[name] = err;
      else delete next[name];
      return next;
    });
  };

  // Validate on blur, except when focus is moving to the submit button: rendering an error there
  // pushes the button down between mousedown and mouseup, so the first press would miss it.
  // onSubmit validates every field anyway.
  const onBlurCheck = (name: "email" | "whatsapp") => (e: React.FocusEvent<HTMLInputElement>) => {
    if ((e.relatedTarget as HTMLButtonElement | null)?.type === "submit") return;
    checkField(name, e.currentTarget.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const data = new FormData(e.currentTarget);
    const next: Errors = {};
    const emailErr = validateEmail(String(data.get("email") ?? ""));
    if (emailErr) next.email = emailErr;
    if (!data.get("role")) next.role = "roleMissing";
    if (normaliseWhatsapp(String(data.get("whatsapp") ?? "")) === null) next.whatsapp = "whatsappInvalid";
    setClientErrors(next);
    if (Object.keys(next).length) {
      e.preventDefault();
      requestAnimationFrame(() => formRef.current?.querySelector<HTMLElement>("[aria-invalid=true], [data-invalid=true]")?.focus());
    }
  };

  const msg = (field: Field) =>
    errors[field] ? (
      <p id={id(`${field}-err`)} className="mt-1.5 text-sm font-medium text-danger">
        {t.errors[errors[field]!]}
      </p>
    ) : null;

  const radioCls =
    "flex min-h-11 cursor-pointer items-center gap-3 rounded-ui border border-control bg-white px-3 py-2 has-[:checked]:border-stamp has-[:checked]:bg-stamp-tint";
  const inputCls =
    "mt-1.5 block w-full min-h-12 rounded-ui border border-control bg-white px-3 text-base text-ink aria-[invalid=true]:border-danger";

  const hasErrors = Object.keys(errors).length > 0;

  return (
    <form ref={formRef} action={action} onSubmit={onSubmit} noValidate className="on-paper grid gap-6 rounded-lg bg-white p-5 text-ink sm:p-7">
      <div aria-live="polite" className="sr-only">
        {hasErrors ? t.errorSummary : ""}
      </div>
      {errors.form ? (
        <p className="rounded-ui border border-danger/40 bg-[#fdecea] px-3 py-2 text-sm font-medium text-danger" role="alert">
          {t.errors.server}
        </p>
      ) : null}

      <div>
        <label htmlFor={id("email")} className="font-semibold">
          {t.email} <span className="font-normal text-muted">{t.required}</span>
        </label>
        <input
          id={id("email")}
          name="email"
          type="email"
          autoComplete="email"
          inputMode="email"
          required
          aria-invalid={errors.email ? true : undefined}
          aria-describedby={errors.email ? id("email-err") : undefined}
          onBlur={onBlurCheck("email")}
          className={inputCls}
        />
        {msg("email")}
      </div>

      <fieldset aria-describedby={errors.role ? id("role-err") : undefined}>
        <legend className="font-semibold">
          {t.role} <span className="font-normal text-muted">{t.required}</span>
        </legend>
        <div className="mt-2 grid gap-2 sm:grid-cols-2">
          {t.roles.map((r, i) => (
            <label key={r.value} className={radioCls}>
              <input
                type="radio"
                name="role"
                value={r.value}
                checked={role === r.value}
                onChange={() => {
                  setRole(r.value);
                  setClientErrors((prev) => {
                    const next = { ...prev };
                    delete next.role;
                    return next;
                  });
                }}
                data-invalid={errors.role && i === 0 ? "true" : undefined}
                className="size-5 accent-stamp"
              />
              <span>{r.label}</span>
            </label>
          ))}
        </div>
        {msg("role")}
      </fieldset>

      <div className="grid gap-6 border-t border-rule pt-5">
        <p className="text-sm font-semibold text-muted">{t.optional}</p>

        {role === "cabinet" ? (
          <fieldset>
            <legend className="font-semibold">{t.files}</legend>
            <div className="mt-2 flex flex-wrap gap-2">
              {t.fileOptions.map((o) => (
                <label key={o.value} className={radioCls}>
                  <input type="radio" name="files" value={o.value} className="size-5 accent-stamp" />
                  <span className="whitespace-nowrap">{o.label}</span>
                </label>
              ))}
            </div>
          </fieldset>
        ) : null}

        <fieldset>
          <legend className="font-semibold">{t.channel}</legend>
          <div className="mt-2 flex flex-wrap gap-2">
            {t.channelOptions.map((o) => (
              <label key={o.value} className={radioCls}>
                <input type="radio" name="channel" value={o.value} className="size-5 accent-stamp" />
                <span>{o.label}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <div>
          <label htmlFor={id("whatsapp")} className="font-semibold">
            {t.whatsapp}
          </label>
          <p id={id("whatsapp-help")} className="text-sm text-muted">
            {t.whatsappHelp}
          </p>
          <input
            id={id("whatsapp")}
            name="whatsapp"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            defaultValue="+225 "
            aria-invalid={errors.whatsapp ? true : undefined}
            aria-describedby={`${id("whatsapp-help")}${errors.whatsapp ? ` ${id("whatsapp-err")}` : ""}`}
            onBlur={onBlurCheck("whatsapp")}
            className={`${inputCls} max-w-[16rem]`}
          />
          {msg("whatsapp")}
        </div>

        <label className="flex cursor-pointer items-start gap-3">
          <input type="checkbox" name="consent" className="mt-0.5 size-5 shrink-0 accent-stamp" />
          <span>{t.consent}</span>
        </label>
      </div>

      {/* Spam checks: honeypot (hidden from people and assistive tech) and fill timer. */}
      <div aria-hidden="true" className="absolute left-[-9999px] h-px w-px overflow-hidden">
        <label>
          Site web
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <input type="hidden" name="started" value={started || ""} />

      <div className="grid gap-3">
        <p className="text-sm text-muted">
          {t.privacy}{" "}
          <Link href="/confidentialite" className="text-stamp underline underline-offset-4">
            {t.privacyLink}
          </Link>
          .
        </p>
        <Button type="submit" disabled={pending} aria-busy={pending} className="w-full sm:w-auto sm:justify-self-start">
          {pending ? t.submitting : t.submit}
        </Button>
      </div>
    </form>
  );
}
