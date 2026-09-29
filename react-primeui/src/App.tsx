import { Button } from "@primereact/ui/button";
import { useState } from "react";
import { Check, User } from "@primeicons/react";
import "./App.css";
import { RadioButtonGroup, type RadioButtonGroupValueChangeEvent } from "@primereact/ui/radiobuttongroup";
import { RadioButton } from "@primereact/ui/radiobutton";
import { InputText } from '@primereact/ui/inputtext';
import { Label } from "@primereact/ui/label";
import { type User as PrimeUser, DEFAULT_USER } from 'lib-primeui';

function App() {
  const [title, setTitle] = useState("react-primeui");
  const [ingredient, setIngredient] = useState<string | undefined>();
  const user: PrimeUser = DEFAULT_USER;
    const categories = [
        { name: 'Accounting', key: 'A' },
        { name: 'Marketing', key: 'M' },
        { name: 'Production', key: 'P' },
        { name: 'Research', key: 'R' }
    ];

  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 text-center">
        <div>
          <h1>{title}</h1>
          <p>{user.name}</p>
        </div>
        <div className="flex gap-4">
          <Button>
            <Check /> Check
          </Button>
          <InputText />
          <Button className="p-button-accent">
            <User /> Button accent
          </Button>
        </div>
        <div className="flex items-center justify-center">
            <RadioButtonGroup
                className="flex flex-wrap gap-4"
                value={ingredient}
                onValueChange={(e: RadioButtonGroupValueChangeEvent) => setIngredient(e.value as string)}
            >
                {categories.map((item) => (
                    <div key={item.key} className="flex items-center gap-2">
                        <RadioButton.Root inputId={item.key} name="category" value={item.key}>
                            <RadioButton.Box>
                                <RadioButton.Indicator match="checked" />
                            </RadioButton.Box>
                        </RadioButton.Root>
                        <Label htmlFor={item.key}>{item.name}</Label>
                    </div>
                ))}
            </RadioButtonGroup>
        </div>
      </div>
    </>
  );
}

export default App;
