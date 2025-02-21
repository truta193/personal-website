interface IconProps {
  name: string;
  scale?: number;
}

export default function FitIcon({ name, scale = 1 }: IconProps) {
  return (
    <object
      data={name}
      type="image/svg+xml"
      class={`pointer-events-none`}
      style={{
        transform: `scale(${scale})`,
        transformOrigin: "center",
      }}
    />
  );
}
