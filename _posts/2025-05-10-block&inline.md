## Block 요소

- 부모 요소의 전체 공간을 차지한다.
- 좌우로 최대 넓이를 차지하여 한 줄에 요소 하나만 위치할 수 있다.
- 줄 바꿈이 일어난다.
- `Block 요소`는` Inline 요소` 안에 중첩 될 수 없지만, `Inline 요소`는 `Block 요소` 안에 중첩 될 수 있다.
- `Inline 요소` 중에 `a 태그`의 경우, 안에 `Block 요소`를 중첩 가능!
- width, height 속성을 사용할 수 있고, padding, border, margin 속성을 사용할 수 있다.
- 대표적인 `Block 요소`로는 `div`, `p`, `h1` ~ `h6`, `header`, `footer`, `section`, `article`, `nav` 등이 있다.

## Inline 요소

- `항상` Block 레벨 요소 내에 포함된다.
- 컨텐츠의 흐름을 끊지 않으며, 컨텐츠에 따라 할당된 공간만을 차지한다.
- 문장, 단어 같은 작은 부분에 대해서 적용된다.
- 줄 바꿈이 일어나지 않는다.
- width, height 속성을 사용할 수 없고, padding, border, margin, 속성은 사용할 수 있지만, margin-top, margin-bottom 속성은 사용할 수 없다.
- 대표적인 `Inline 요소`로는 `a`, `em`, `strong` 등이 있다.

## Inline-Block 요소

- 줄 바꿈이 없이 한 줄 안에 다른 요소들과 나란히 배치 가능하다.
- `Block 요소` 처럼 width와 height 속성과 margin, padding 속성도 사용 가능하다.
- 대표적인 `Inline 요소`로는 `button`, `input`, `select` 등이 있다.
 
## Block / Inline / Inline-Block 비교

| | Block | Inline | Inline-Block |
| --- | :---: | :---: | :---: |
| 요소 포함 | 인라인 요소 포함 가능 | 블록 요소 포함 불가 (`a 태그`만 가능) | - |
| 줄바꿈 | O (세로로 쌓임) | X (가로로 쌓임) | X (세로로 쌓임) |
| width, height | O | X | O |
| padding | O | O | O |
| margin | O |△ (left, rigth만 적용 / top, bottom 적용 X) | O |
| border | O | O | O |
