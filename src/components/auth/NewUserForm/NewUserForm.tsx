import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

import { NewUserFormProps } from "@/types/NewUserFormProps";
import { StackedCardsSubscriptions } from "@/components/payments/StackedCardsSubscriptions";

export const NewUserForm = (props: NewUserFormProps) => {
  const { user } = props;

  return (
    <>
      <div>
        <label
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          htmlFor="username"
        >
          Name
        </label>
        <div className="mt-1">
          <input
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
            id="name"
            name="name"
            defaultValue={user.name ?? ""}
            placeholder="Enter your name"
            type="text"
          />
        </div>
      </div>
      <div>
        <label
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          htmlFor="timezone"
        >
          Timezone
        </label>
        <div className="mt-1">
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select timezone" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="UTC">UTC</SelectItem>
              <SelectItem value="America/New_York">America/New_York</SelectItem>
              <SelectItem value="Europe/London">Europe/London</SelectItem>
              <SelectItem value="Asia/Tokyo">Asia/Tokyo</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </>
  );
};
