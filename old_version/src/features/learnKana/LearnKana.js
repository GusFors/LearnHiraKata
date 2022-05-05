import React, { useState, useEffect } from 'react'

export const LearnKana = () => {
  // { さ: 'sa', し: 'shi', す: 'su', せ: 'se', そ: 'so' },
  // [{ か: 'ka' }, { き: 'ki' }, { く: 'ku' }, { け: 'ke' }, { こ: 'ko' }],
  // { た: 'ta', ち: 'chi', つ: 'tsu', て: 'te', と: 'to' },

  // { な: 'na', に: 'ni', ぬ: 'nu', ね: 'ne', の: 'no' },

  // { は: 'ha', ひ: 'hi', ふ: 'fu', へ: 'he', ほ: 'ho' },

  // { ま: 'ma', み: 'mi', む: 'mu', め: 'me', も: 'mo' },
  // { や: 'ya', ゆ: 'yu', よ: 'yo' },
  // { ら: 'ra', り: 'ri', る: 'ru', れ: 're', ろ: 'ro' },
  // { わ: 'wa', を: 'o' },
  // { ん: 'n' },
  const Hiragana = [
    [{ あ: 'a' }, { い: 'i' }, { う: 'u' }, { え: 'e' }, { お: 'o' }],
    [{ か: 'ka' }, { き: 'ki' }, { く: 'ku' }, { け: 'ke' }, { こ: 'ko' }],
    [{ た: 'ta' }, { ち: 'chi' }, { つ: 'tsu' }, { て: 'te' }, { と: 'to' }],
  ]

  const [kanaToggles, setKanaToggles] = useState(kanaToggleDiv)

  const [currentHiragana, setCurrentHiragana] = useState({})
  const [currentRightAnswers, setCurrentRightAnswers] = useState(0)
  const [currentTotalAnswers, setCurrentTotalAnswers] = useState(0)

  useEffect(() => {
    setCurrentHiragana(randomizeHiragana())
    return () => {}
  }, [])

  function submitOnEnter(event) {
    if (event.which === 13) {
      event.preventDefault()

      console.log(Object.values(currentHiragana)[0])
      if (Object.values(currentHiragana)[0] === event.target.value) {
        console.log('rätt!')

        event.target.value = null

        setCurrentHiragana(randomizeHiragana())
        setCurrentRightAnswers(currentRightAnswers + 1)
      } else {
        console.log('fel!')
      }
      setCurrentTotalAnswers(currentTotalAnswers + 1)
    }

    if (event.target.value.length >= Object.values(currentHiragana)[0].length) {
      event.preventDefault()
      return null
    }
  }

  function randomizeHiragana() {
    let chosenRow = Hiragana[Math.floor(Math.random() * Hiragana.length)]
    let chosenKana = chosenRow[Math.floor(Math.random() * chosenRow.length)]
    // // Object.values(
    //   firstRowHiragana[Math.floor(Math.random() * 5)]
    //   )[0]
    // console.log(chosenRow)
    return chosenKana
  }
  let currentKana = [
    { あ: 'a' },
    { い: 'i' },
    { う: 'u' },
    { え: 'e' },
    { お: 'o' },
  ]
  function kanaToggleDiv() {
    let kanaRows = Hiragana.map((item) => {
      let kanaArr = []
      item.forEach((element) => {
        kanaArr.push(Object.keys(element)[0])
      })
      return kanaArr
    })

    console.log(kanaRows)

    let parentDiv = () => {
      return (
        <div
          style={{
            margin: 50,
            width: 800,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            alignContent: 'space-around',
            border: '2px solid rgb(20,20,20,0)',
          }}
        >
          {kanaRows.map((kanaSection) => {
            console.log(kanaSection)
            let section = kanaSection.map((kana) => {
              console.log(kana)
              return (
                <span
                  style={{
                    width: '30px',
                    color: 'white',
                    border: '2px solid rgb(20,20,20,0.5)',
                  }}
                >
                  {kana}
                </span>
              )
            })

            return (
              <div
                style={{
                  width: '35px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                  alignContent: 'space-around',
                }}
              >
                {section}{' '}
              </div>
            )
          })}
        </div>
      )
    }

    return <div>{parentDiv()}</div>
  }
  return (
    <div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          alignContent: 'space-around',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            width: '400px',
          }}
        >
          <span style={{ fontSize: '15px' }}>
            {currentRightAnswers} / {currentTotalAnswers}
          </span>
        </div>
        <span style={{ padding: 17, fontSize: '60px' }}>
          {Object.keys(currentHiragana)}
        </span>
        <textarea
          placeholder="Enter text here"
          onKeyPress={submitOnEnter}
          style={{
            borderRadius: '7px',
            backgroundColor: 'rgb(50,20,20,0.2)',
            border: '2px solid rgb(20,20,20,0.2)',
            width: '400px',
            height: '30px',
            color: '#FFFFFF',
            padding: '7px',
            fontFamily: 'inherit',
            resize: 'none',
            boxShadow: '2px 2px 22px 10px rgba(25, 25, 55, 0.0)',
          }}
        ></textarea>
      </div>
      {kanaToggles}
    </div>
  )
}
