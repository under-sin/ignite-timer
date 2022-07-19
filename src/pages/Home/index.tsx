import { Play } from "phosphor-react";
import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmoutInput,
  Separetor,
  StartCountdownButton,
  TaskInput
} from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            id="task"
            list="task-suggestions"
            placeholder="Dê um nome para o seu projeto"
          />
          <datalist id="task-suggestions">
            <option value="opeção 1" />
            <option value="opeção 2" />
            <option value="opeção 3" />
            <option value="opeção 4" />
            <option value="mamão" />
          </datalist>

          <label htmlFor="minutesAmout">durante</label>
          <MinutesAmoutInput
            type="number"
            id="minutesAmout"
            placeholder="00"
            step={5}
            min={5}
            max={60}
          />

          <span>minutos.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separetor>:</Separetor>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountdownButton type="submit">
          <Play size={24} />
          Começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  );
}
