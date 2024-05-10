import React from "react";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import "./Radio.css";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../components/ui/form";
const Radio = ({ setCurrentstep, form, setIsactive }) => {
  return (
    <>
      <FormField
        control={form.control}
        name="type"
        render={({ field }) => (
          <FormItem className="radios">
            <FormLabel className="check_ques">
              Məşğul olduğunuz idman növü var?*
            </FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="checks"
              >
                <FormItem>
                  <div className="check_beli">
                    <FormLabel className="label">Bəli</FormLabel>
                    <FormControl>
                      <RadioGroupItem
                        value="all"
                        className="mark"
                        onClick={() => {
                          setIsactive(true);
                        }}
                      />
                    </FormControl>
                  </div>
                </FormItem>
                <FormItem>
                  <div className="check_beli">
                    <FormLabel className="label">Xeyr</FormLabel>
                    <FormControl>
                      <RadioGroupItem
                        value="none"
                        className="mark"
                        onClick={() => {
                          setCurrentstep((prev) => prev + 1);
                        }}
                      />
                    </FormControl>
                  </div>
                </FormItem>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};

export default Radio;
