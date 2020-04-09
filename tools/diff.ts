import deepDiff from "deep-diff"

type Gender = "male" | "female" | "neither"

type Likes = string[]
type Dislikes = string[]
type Preferences = {
  likes: Likes
  dislikes: Dislikes
}

type Person = {
  [key: string]: any
  name: string
  nickname?: string
  age: number
  gender: Gender
  isStudent: boolean
  preferences: Preferences
  anyData: any
}

const obj1: Person = {
  name: "Piyo",
  nickname: "piyo",
  age: 28,
  gender: "male",
  isStudent: false,
  preferences: {
    likes: ["hoge"],
    dislikes: ["fuga"]
  },
  anyData: {
    hoge: "hogehoge",
    fuga: {
      piyo: 22,
      moge: 33,
      moga: {
        foo: 44,
        bar: "55"
      }
    },
    hogera: [1, 2, 3, 4, 5]
  }
}

const obj2: Person = {
  name: "Piyo",
  age: 23,
  gender: "female",
  isStudent: false,
  preferences: {
    likes: ["piyo"],
    dislikes: ["fuga"]
  },
  anyData: {
    hoge: "fugafuga",
    fuga: {
      piyo: {
        foo: 44,
        bar: "55"
      },
      moge: 33,
      moga: {
        foo: 44,
        bar: 55
      }
    },
    hogera: [5, 4, 1, 3]
  }
}

const result = deepDiff.diff(obj1, obj2)

console.log(result)
