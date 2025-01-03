import {
    Menu,
    usePlaybackRateOptions,
    Tooltip,
    type MenuPlacement,
    type TooltipPlacement,
    useMediaState,
    PIPButton,
  } from "@vidstack/react";
  // See "Icons" component page for setup before importing the following:
  import {
    ChevronLeftIcon,
    ChevronRightIcon,
    ClosedCaptionsIcon,
    PictureInPictureExitIcon,
    PictureInPictureIcon,
    RadioButtonIcon,
    RadioButtonSelectedIcon,
    SettingsIcon,
  } from "@vidstack/react/icons";
  import { MediaButtonProps, buttonClass, tooltipClass } from "./buttons";
  
  interface SubmenuButtonProps {
    label: string;
    hint: string;
    disabled?: boolean;
    icon: React.ComponentType<{ className?: string }>;
  }
  
  export interface SettingsProps {
    placement: MenuPlacement;
    tooltipPlacement: TooltipPlacement;
  }
  
  // CSS OF SPEEDSUBMENU
  export const menuClass =
    "animate-out fade-out slide-out-to-bottom-2 data-[open]:animate-in data-[open]:fade-in data-[open]:slide-in-from-bottom-4 flex h-[var(--menu-height)] max-h-[400px] min-w-[260px] flex-col overflow-y-auto overscroll-y-contain rounded-md border border-white/10 bg-black/95 p-2.5 font-sans text-[15px] font-medium outline-none backdrop-blur-sm transition-[height] duration-300 will-change-[height] data-[resizing]:overflow-hidden";
  
  // Re-use styles across other submenus.
  const submenuClassName =
      "hidden w-full flex-col items-start justify-center outline-none data-[keyboard]:mt-[3px] data-[open]:inline-block",
    radioClassName =
      "ring-sky-400 group relative flex w-full cursor-pointer select-none items-center justify-start rounded-sm p-2.5 outline-none data-[hocus]:bg-white/10 data-[focus]:ring-[3px]",
    radioIconClassName = "h-4 w-4 text-white group-data-[checked]:hidden",
    radioSelectedIconClassName =
      "text-indigo-400 hidden h-4 w-4 group-data-[checked]:block";
  
  // text in SpeedSubmenu
  function SubmenuButton({
    label,
    hint,
    icon: Icon,
    disabled,
  }: SubmenuButtonProps) {
    return (
      <Menu.Button
        className="ring-sky-400 parent left-0 z-10 flex w-full cursor-pointer select-none items-center justify-start rounded-sm bg-black/60 p-2.5 outline-none ring-inset data-[open]:sticky data-[open]:-top-2.5 data-[hocus]:bg-white/10 data-[focus]:ring-[3px] aria-disabled:hidden"
        disabled={disabled}
      >
        <ChevronLeftIcon className="parent-data-[open]:block -ml-0.5 mr-1.5 hidden h-[18px] w-[18px]" />
        <Icon className="w-5 h-5 parent-data-[open]:hidden" />
        <span className="ml-1.5 parent-data-[open]:ml-0">{label}</span>
        <span className="ml-auto text-sm text-white/50">{hint}</span>
        <ChevronRightIcon className="parent-data-[open]:hidden ml-0.5 h-[18px] w-[18px] text-sm text-white/50" />
      </Menu.Button>
    );
  }
  
  // icon setting
  export function Settings({ placement, tooltipPlacement }: SettingsProps) {
    return (
      <Menu.Root className="parent">
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <Menu.Button className={buttonClass}>
              <SettingsIcon className="h-8 w-8 transform transition-transform duration-200 ease-out group-data-[open]:rotate-90" />
            </Menu.Button>
          </Tooltip.Trigger>
          <Tooltip.Content className={tooltipClass} placement={tooltipPlacement}>
            Settings
          </Tooltip.Content>
        </Tooltip.Root>
        <Menu.Content className={menuClass} placement={placement}>
          <SpeedSubmenu />
        </Menu.Content>
      </Menu.Root>
    );
  }
  
  // select the speed time video
  export default function SpeedSubmenu() {
    const options = usePlaybackRateOptions(),
      hint =
        options.selectedValue === "1" ? "Normal" : options.selectedValue + "x";
    return (
      <Menu.Root>
        <SubmenuButton
          label="Speed"
          hint={hint}
          disabled={options.disabled}
          icon={ClosedCaptionsIcon}
        />
        <Menu.Content className={submenuClassName}>
          <Menu.RadioGroup
            className="w-full flex flex-col"
            value={options.selectedValue}
          >
            {options.map(({ label, value, select }) => (
              <Menu.Radio
                className={radioClassName}
                value={value}
                onSelect={select}
                key={value}
              >
                <RadioButtonIcon className={radioIconClassName} />
                <RadioButtonSelectedIcon className={radioSelectedIconClassName} />
                {label}
              </Menu.Radio>
            ))}
          </Menu.RadioGroup>
        </Menu.Content>
      </Menu.Root>
    );
  }
  
  // pop to mini screen
  export function PIP({ tooltipPlacement }: MediaButtonProps) {
    const isActive = useMediaState("pictureInPicture");
  
    return (
      <Tooltip.Root>
        <Tooltip.Trigger>
          <PIPButton className={buttonClass}>
            {isActive ? (
              <PictureInPictureExitIcon className="w-8 h-8" />
            ) : (
              <PictureInPictureIcon className="w-8 h-8" />
            )}
          </PIPButton>
          <Tooltip.Content className={tooltipClass} placement={tooltipPlacement}>
            {isActive ? "Exit PIP" : "Enter PIP"}
          </Tooltip.Content>
        </Tooltip.Trigger>
      </Tooltip.Root>
    );
  }