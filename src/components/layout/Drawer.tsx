import { css } from "@styled-system/css";
import { MdMenu, MdClose } from "react-icons/md";
import { siteTitle } from "@/utils";
import { Drawer, Button, IconButton } from "../ui";
import { ColorModeHandler } from "../client";
import Menu from "./Menu";

function MyDrawer(props: Drawer.RootProps) {
  return (
    <Drawer.Root {...props}>
      <Drawer.Trigger asChild>
        <IconButton
          className={css({
            position: "fixed",
            bottom: 4,
            right: 4,
            zIndex: "fab",
            hideFrom: "md",
          })}
          size="xl"
        >
          <MdMenu />
        </IconButton>
      </Drawer.Trigger>
      <Drawer.Backdrop />
      <Drawer.Positioner>
        <Drawer.Content>
          <Drawer.Header>
            <Drawer.Title>{siteTitle}</Drawer.Title>
            <Menu />
            <Drawer.CloseTrigger asChild position="absolute" top="3" right="4">
              <IconButton variant="ghost">
                <MdClose />
              </IconButton>
            </Drawer.CloseTrigger>
          </Drawer.Header>
          <Drawer.Body>{/* Content */}</Drawer.Body>
          <Drawer.Footer gap="3">
            <ColorModeHandler />
            <Button>Home</Button>
            <Drawer.CloseTrigger asChild>
              <Button variant="outline">Close</Button>
            </Drawer.CloseTrigger>
          </Drawer.Footer>
        </Drawer.Content>
      </Drawer.Positioner>
    </Drawer.Root>
  );
}

export default MyDrawer;