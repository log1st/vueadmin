<template>
  <div :class="$style.root">
    <div :class="$style.body">
      <div :class="$style.fields" :style="{ width: '600px' }">
        <div :class="$style.template">
          <slot name="template"></slot>
        </div>
        <div :class="$style.style">
          <slot name="style"></slot>
        </div>
        <div :class="$style.script">
          <slot name="script"></slot>
        </div>
      </div>
      <div :class="$style.content">
        <div :class="$style.preview">
          <slot />
        </div>
        <div :class="$style.binding">
          <slot name="binding" />
        </div>
      </div>
    </div>
    <div :class="$style.submit">
      <slot name="submit" />
    </div>
  </div>
</template>

<script setup lang="ts"></script>
<style lang="scss" module>
@import "@/shared/ui/assets/utils";

.root {
  display: flex;
  flex-direction: column;
  gap: rm(20);
}

.body {
  display: grid;
  grid-template-columns: auto 1fr;

  min-block-size: 100%;
}

.fields {
  resize: horizontal;
  overflow: auto;

  display: flex;
  flex-direction: column;
  gap: rm(10);
  padding-inline-end: rm(20);

  min-inline-size: rm(250);
}

.template,
.style,
.script{
  resize: vertical;
  overflow: auto;
  flex-grow: 1;
  padding: rm(5);

  min-block-size: rm(150);

  > * {
    block-size: 100%;
    inline-size: 100%;
  }
}

.content {
  display: flex;
  flex-direction: column;
  gap: rm(10);
}

.binding {
  resize: vertical;
  overflow: auto;
  padding: rm(5);

  min-block-size: rm(150);

  > * {
    block-size: 100%;
    inline-size: 100%;
  }
}

.submit {
  flex-shrink: 0;
  align-self: end;
}

.preview {
  flex-grow: 1;
}
</style>
