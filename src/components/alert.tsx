import type { ReactNode } from "react";
import { Alert as ParkAlert } from "./ui";

type AlertProps = {
  title: string;
  icon: ReactNode;
  description?: ReactNode;
};

function Alert({ title, icon, description }: AlertProps) {
  return (
    <ParkAlert.Root>
      <ParkAlert.Icon asChild>{icon}</ParkAlert.Icon>
      <ParkAlert.Content>
        <ParkAlert.Title>{title}</ParkAlert.Title>
        {description && (
          <ParkAlert.Description>{description}</ParkAlert.Description>
        )}
      </ParkAlert.Content>
    </ParkAlert.Root>
  );
}

export default Alert;
