import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500">
        Guess the WORDLE in 6 tries. After each guess, the color of the tiles
        will change to show how close your guess was to the word.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="M" status="correct" />
        <Cell value="A" />
        <Cell value="N" />
        <Cell value="I" />
        <Cell value="A" />
      </div>
      <p className="text-sm text-gray-500">
        The letter M is in the word and in the correct spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="T" />
        <Cell value="R" />
        <Cell value="A" status="present" />
        <Cell value="C" />
        <Cell value="K" />
      </div>
      <p className="text-sm text-gray-500">
        The letter A is in the word but in the wrong spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="S" />
        <Cell value="H" />
        <Cell value="O" />
        <Cell value="O" status="absent" />
        <Cell value="T" />
      </div>
      <p className="text-sm text-gray-500">
        The letter O is not in the word in any spot.
      </p>
    </BaseModal>
  )
}
