<template>
  <Tailwind>
    <Html>
      <Head />
      <Preview>olhameucv.dev</Preview>
      <Body :style="main">
        <Container class="w-full">
          <Section class="p-4">
            <Text class="text-xl font-bold">
              👀 olhameucv<b class="text-blue-700/70">.dev</b>
            </Text>
          </Section>

          <Section :style="content" class="border rounded overflow-hidden">
            <Row class="pl-8 pr-8 pt-8 pb-0">
              <Column>
                <Heading class="text-2xl font-bold text-center">
                  🎉 Seu currículo foi
                  <b class="text-green-500">analisado!</b>
                </Heading>
                <Heading as="h2" class="text-lg font-bold text-center">
                  Ficamos felizes em te informar que a análise do seu currículo
                  foi concluída. 😊 <br />
                  Verifique o resultado abaixo:
                </Heading>

                <div>
                  <div
                    class="grid grid-cols-1 lg:grid-cols-2 gap-8 text-gray-800 text-center lg:text-justify"
                  >
                    <div
                      v-for="item in feedbackResponseAnalyse"
                      :key="item.section"
                      class="bg-white rounded-lg shadow-md p-6"
                      :class="{
                        'lg:col-span-2': item.section === '🏅 Certificações',
                      }"
                    >
                      <h1 class="text-lg font-bold mb-3">{{ item.section }}</h1>
                      <div class="space-y-2">
                        <p class="text-sm">
                          <span class="font-semibold">🔍 Feedback:</span>
                          {{ item.feedback }}
                        </p>
                        <p class="text-sm">
                          <span class="font-semibold">💡 Sugestões:</span>
                          {{ item.suggestions }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Column>
            </Row>

            <Row :style="{ ...boxInfos, paddingTop: '0' }">
              <Column
                :style="containerButton"
                class="flex justify-center items-center mt-4"
                col-span="{2}"
              >
                <Button
                  href="#"
                  class="bg-blue-700 p-4 text-white font-bold rounded"
                >
                  👀 Deseja avaliar mais?
                </Button>
              </Column>
            </Row>
          </Section>

          <Text
            :style="{
              textAlign: 'center',
              fontSize: 12,
              color: 'rgb(0,0,0, 0.7)',
            }"
          >
            © 2024 | www.olhameucv.dev
          </Text>
        </Container>
      </Body>
    </Html>
  </Tailwind>
</template>

<script setup lang="ts">
import {
  Html,
  Button,
  Head,
  Preview,
  Text,
  Section,
  Column,
  Row,
  Heading,
  Body,
  Tailwind,
  Container,
} from "@vue-email/components";
import { type FeedbackProps } from "~/entities/Feedback";

const props = defineProps<{
  feedbackResponse: FeedbackProps;
}>();

const main = {
  backgroundColor: "#fff",
  fontFamily: "sans-serif",
};

const containerButton = {
  display: "flex",
  justifyContent: "center",
  width: "100%",
};

const content = {
  border: "1px solid rgb(0,0,0, 0.1)",
};

const boxInfos = {
  padding: "40px 40px",
};

const feedbackResponseAnalyse = [
  {
    section: "📄 Resumo",
    feedback: props.feedbackResponse?.summary.feedback,
    suggestions: props.feedbackResponse?.summary.suggestions,
  },
  {
    section: "💼 Experiências Profissionais",
    feedback: props.feedbackResponse?.profissionalExperiences.feedback,
    suggestions: props.feedbackResponse?.profissionalExperiences.suggestions,
  },
  {
    section: "🎓 Formação acadêmica",
    feedback: props.feedbackResponse?.education.feedback,
    suggestions: props.feedbackResponse?.education.suggestions,
  },
  {
    section: "🛠️ Habilidades",
    feedback: props.feedbackResponse?.skills.feedback,
    suggestions: props.feedbackResponse?.skills.suggestions,
  },
  {
    section: "🏅 Certificações",
    feedback: props.feedbackResponse?.certifications.feedback,
    suggestions: props.feedbackResponse?.certifications.suggestions,
  },
];
</script>
