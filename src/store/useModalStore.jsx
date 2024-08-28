import { create } from "zustand";

const useModalStore = create((set) => ({
  selectedTemplate: null,
  showTemplateModal: false,
  showResetModal: false,
  showCreateModal: false,
  showCopyModal: false,

  setSelectedTemplate: (value) => set({ selectedTemplate: value }),

  openTemplateModal: () => set({ showTemplateModal: true }),
  closeTemplateModal: () => set({ showTemplateModal: false }),

  openResetModal: () => set({ showResetModal: true }),
  closeResetModal: () => set({ showResetModal: false }),

  openCreateModal: () => set({ showCreateModal: true }),
  closeCreateModal: () => set({ showCreateModal: false }),

  openCopyModal: () => set({ showCopyModal: true }),
  closeCopyModal: () => set({ showCopyModal: false }),

  openErrorModal: () => set({ showErrorModal: true }),
  closeErrorModal: () => set({ showErrorModal: false }),
}));

export default useModalStore;
