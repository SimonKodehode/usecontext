import { useContext } from "react";
import { NumberContext } from "../helper/Context";

const AnExample = () => {
	const {number, setNumber} = useContext(NumberContext)
	const decreaseCount = () => {
		setNumber(number - 1)
	}

	const increaseCount = () => {
		setNumber(number + 1)
	}

	return(
		<>
		<button onClick={decreaseCount}>-</button>
		<span>{number}</span>
		<button onClick={increaseCount}>+</button>
		</>
	)
}

export default AnExample;
