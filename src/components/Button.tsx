export const Button = (props: React.PropsWithChildren) => {
  return (
    <button>
      <div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <span>{props.children}</span>
    </button>
  )
}
