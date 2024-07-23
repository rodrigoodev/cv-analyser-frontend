import { defineStore } from "pinia";
import type { FeedbackResponse } from "~/entities/Feedback";

export const useGlobalStore = defineStore(
  "resume",
  () => {
    const showAlert = ref(false);
    const resume: Ref<boolean> = ref(false);
    const processId = ref("");
    const showFeedback = ref(false);
    const feedback = ref("");
    const price = ref(null);

    const feedbackExam: ComputedRef<FeedbackResponse> = computed(() => {
      return JSON.parse(feedback.value) as FeedbackResponse;
    });

    const hasResume = computed(() => resume.value);

    const setResume = (newResume: boolean) => {
      resume.value = newResume;
    };

    return {
      showFeedback,
      feedback,
      processId,
      hasResume,
      showAlert,
      feedbackExam,
      price,
      setResume,
    };
  },
  {
    persist: {
      storage: persistedState.localStorage,
    },
  }
);
