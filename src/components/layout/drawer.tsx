import { MdMenu, MdClose } from "react-icons/md";
import NextLink from "next/link";
import { siteTitle } from "@/data/siteMetadata";
import * as ParkDrawer from "../ui/drawer";
import { Button } from "../ui/button";
import { IconButton } from "../ui/icon-button";
import ColorModeHandler from "../color-mode-handler";
import Menu from "./menu";

function Drawer(props: ParkDrawer.RootProps) {
  return (
    <ParkDrawer.Root {...props}>
      <ParkDrawer.Trigger asChild>
        <IconButton
          position="fixed"
          bottom={4}
          right={4}
          zIndex="fab"
          hideFrom="md"
          size="xl"
          aria-label="Open Menu"
        >
          <MdMenu />
        </IconButton>
      </ParkDrawer.Trigger>
      <ParkDrawer.Backdrop />
      <ParkDrawer.Positioner>
        <ParkDrawer.Content>
          <ParkDrawer.Header>
            <ParkDrawer.Title>{siteTitle}</ParkDrawer.Title>
            <ParkDrawer.CloseTrigger
              asChild
              position="absolute"
              top={3}
              right={4}
            >
              <IconButton variant="ghost" aria-label="Close Menu">
                <MdClose />
              </IconButton>
            </ParkDrawer.CloseTrigger>
          </ParkDrawer.Header>
          <ParkDrawer.Body>
            <Menu />
          </ParkDrawer.Body>
          <ParkDrawer.Footer gap="3">
            <ColorModeHandler />
            <ParkDrawer.CloseTrigger asChild>
              <Button asChild aria-label="Home">
                <NextLink href="/">Home</NextLink>
              </Button>
            </ParkDrawer.CloseTrigger>
            <ParkDrawer.CloseTrigger asChild>
              <Button variant="outline" aria-label="Close Menu">
                Close
              </Button>
            </ParkDrawer.CloseTrigger>
          </ParkDrawer.Footer>
        </ParkDrawer.Content>
      </ParkDrawer.Positioner>
    </ParkDrawer.Root>
  );
}

export default Drawer;
