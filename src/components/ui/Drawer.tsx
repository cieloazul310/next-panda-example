import { Dialog as ArkDrawer } from "@ark-ui/react/dialog";
import { ark } from "@ark-ui/react/factory";
import type { ComponentProps } from "react";
import { styled } from "@styled-system/jsx";
import { drawer } from "@styled-system/recipes";
import { createStyleContext } from "@/utils/create-style-context";

const { withProvider, withContext } = createStyleContext(drawer);

export const DrawerRoot = withProvider(ArkDrawer.Root);
export const DrawerBackdrop = withContext(
  styled(ArkDrawer.Backdrop),
  "backdrop",
);
export const DrawerBody = withContext(styled(ark.div), "body");
export const DrawerCloseTrigger = withContext(
  styled(ArkDrawer.CloseTrigger),
  "closeTrigger",
);
export const DrawerContent = withContext(styled(ArkDrawer.Content), "content");
export const DrawerDescription = withContext(
  styled(ArkDrawer.Description),
  "description",
);
export const DrawerFooter = withContext(styled(ark.div), "footer");
export const DrawerHeader = withContext(styled(ark.div), "header");
export const DrawerPositioner = withContext(
  styled(ArkDrawer.Positioner),
  "positioner",
);
export const DrawerTitle = withContext(styled(ArkDrawer.Title), "title");
export const DrawerTrigger = withContext(styled(ArkDrawer.Trigger), "trigger");

export interface RootProps extends ComponentProps<typeof DrawerRoot> {}
export interface BackdropProps extends ComponentProps<typeof DrawerBackdrop> {}
export interface BodyProps extends ComponentProps<typeof DrawerBody> {}
export interface CloseTriggerProps
  extends ComponentProps<typeof DrawerCloseTrigger> {}
export interface ContentProps extends ComponentProps<typeof DrawerContent> {}
export interface DescriptionProps
  extends ComponentProps<typeof DrawerDescription> {}
export interface FooterProps extends ComponentProps<typeof DrawerFooter> {}
export interface HeaderProps extends ComponentProps<typeof DrawerHeader> {}
export interface PositionerProps
  extends ComponentProps<typeof DrawerPositioner> {}
export interface TitleProps extends ComponentProps<typeof DrawerTitle> {}
export interface TriggerProps extends ComponentProps<typeof DrawerTrigger> {}
