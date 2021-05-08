export type MenuIconProps = {
  icon: string;
  colorClass?: string;
};

function MenuIcon({ icon, colorClass }: MenuIconProps) {
  return (
    <div className={`d-inline-block me-2 ${colorClass ?? 'text-muted'}`} style={{ width: '1em' }}>
      <i className={`fa ${icon}`} />
    </div>
  );
}

export default MenuIcon;
