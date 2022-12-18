import { useRouter } from "next/router"

export default function Multipage(){
  const router = useRouter()
  // queryParameterは文字列になる
  const step = router.query.step ?? 0
  console.log(step, 'step')

  const goToStep = (_step: number, asPath: string) => {
    // 実体は第一引数、見てくれは第二引数
    // activeStep✖️useRouter
    router.push(`multipage?step=${_step}`, asPath)
  }

  return (
    <div>
      {Number(step) == 0 && (
        <>
          <h3>Step {step}</h3>
          <button onClick={() => goToStep(1, "/personal")}>Next Step</button>
        </>
      )}
      {Number(step) == 1 && (
        <>
          <h3>Step {step}</h3>
          <button onClick={() => goToStep(2, "/confirm")}>Next Step</button>
        </>
      )}
      {Number(step) == 2 && (
        <>
          <h3>Step {step}</h3>
          <button onClick={() => goToStep(3, "/multipage")}>Next Step</button>
        </>
      )}
    </div>
  )
}