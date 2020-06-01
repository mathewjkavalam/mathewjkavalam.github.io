import {
  dayOfYear,
  currentDayOfYear,
} from "https://deno.land/std/datetime/mod.ts";
void run(){
  dayOfYear(new Date("2019-03-11T03:24:00")); // output: 70
  currentDayOfYear();

}
