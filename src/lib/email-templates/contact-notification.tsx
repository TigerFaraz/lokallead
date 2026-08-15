import React from "react";
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import type { TemplateEntry } from "./registry";

interface Props {
  firmanavn?: string;
  hjemmeside?: string;
  telefon?: string;
  email?: string;
  services?: string;
  maal?: string;
}

const Row = ({ label, value }: { label: string; value?: string }) => (
  <Section style={row}>
    <Text style={labelStyle}>{label}</Text>
    <Text style={valueStyle}>{value && value.trim() ? value : "—"}</Text>
  </Section>
);

const Email = ({ firmanavn, hjemmeside, telefon, email, services, maal }: Props) => (
  <Html lang="da" dir="ltr">
    <Head />
    <Preview>Ny formularindsendelse fra {firmanavn || "en virksomhed"}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={heading}>Ny henvendelse fra hjemmesiden</Heading>
        <Text style={intro}>
          En virksomhed har udfyldt formularen og ønsker et gratis udkast.
        </Text>
        <Hr style={hr} />
        <Row label="Firmanavn" value={firmanavn} />
        <Row label="Hjemmeside" value={hjemmeside} />
        <Row label="Telefonnummer" value={telefon} />
        <Row label="Email" value={email} />
        <Row label="Hvilke services tilbyder I?" value={services} />
        <Row label="Vigtigste mål med hjemmesiden" value={maal} />
      </Container>
    </Body>
  </Html>
);

export const template = {
  component: Email,
  subject: (data: Record<string, any>) =>
    `Ny henvendelse: ${data?.["firmanavn"] || "Ukendt virksomhed"}`,
  displayName: "Kontaktformular – notifikation",
  to: "info.lokallead@gmail.com",
  previewData: {
    firmanavn: "Nordic Rengøring ApS",
    hjemmeside: "nordicrengoering.dk",
    telefon: "+45 12 34 56 78",
    email: "kontakt@nordicrengoering.dk",
    services: "Erhvervsrengøring og vinduespolering",
    maal: "Flere kundehenvendelser fra lokalområdet",
  },
} satisfies TemplateEntry;

const main = {
  backgroundColor: "#ffffff",
  fontFamily: "Inter, Helvetica, Arial, sans-serif",
};

const container = {
  padding: "32px 28px",
  maxWidth: "600px",
};

const heading = {
  color: "#0f2a43",
  fontSize: "22px",
  margin: "0 0 8px",
};

const intro = {
  color: "#4a5a68",
  fontSize: "14px",
  margin: "0",
};

const hr = { borderColor: "#e6ebef", margin: "20px 0" };

const row = { marginBottom: "14px" };

const labelStyle = {
  color: "#7b8894",
  fontSize: "12px",
  textTransform: "uppercase" as const,
  letterSpacing: "0.04em",
  margin: "0 0 2px",
};

const valueStyle = {
  color: "#0f2a43",
  fontSize: "15px",
  margin: "0",
  whiteSpace: "pre-wrap" as const,
};
