import { ChangeEvent } from "react";

export const TaskNotificationsForm = (props: TaskNotificationsFormProps) => {
  const {
    emailNotification,
    setEmailNotification,
    pushNotification,
    setPushNotification,
  } = props;

  const handleEmailNotificationChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmailNotification(e.target.checked);
  };

  const handlePushNotificationChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPushNotification(e.target.value);
  };
  return (
    <>
      <h3 className="text-xl leading-6 font-medium text-gray-900 dark:text-gray-100">
        Notifications
      </h3>
      <p className="mt-1 text-sm text-gray-500">
        We will always let you know when your task deadline is approaching, but
        you pick if want to hear about by email.
      </p>
      <div className="mt-6">
        <fieldset>
          <legend className="text-base font-medium text-gray-900 dark:text-gray-100">
            By Email
          </legend>
          <div className="mt-4 space-y-4">
            <div className="relative flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="email-notification"
                  name="email-notification"
                  type="checkbox"
                  checked={emailNotification}
                  onChange={handleEmailNotificationChange}
                  className="focus:ring-emerald-500 h-4 w-4 text-emerald-600 border-gray-300 rounded"
                />
              </div>
              <div className="ml-3 text-sm">
                <label
                  htmlFor="email-notification"
                  className="font-medium text-gray-700 dark:text-gray-300"
                >
                  Email Notification
                </label>
                <p className="text-gray-500">
                  Get notified when your task deadline is approaching.
                </p>
              </div>
            </div>
          </div>
        </fieldset>
        <fieldset className="mt-6">
          <div>
            <legend className="text-base font-medium text-gray-900 dark:text-gray-100">
              Push Notifications
            </legend>
            <p className="text-sm text-gray-500">
              These are delivered to your mobile device or desktop via web
              application.
            </p>
          </div>
          <div className="mt-4 space-y-4">
            <div className="flex items-center">
              <input
                id="push-everything"
                name="push-notifications"
                type="radio"
                value="everything"
                checked={pushNotification === "everything"}
                onChange={handlePushNotificationChange}
                className="focus:ring-emerald-500 h-4 w-4 text-emerald-600 border-gray-300"
              />
              <label
                htmlFor="push-everything"
                className="ml-3 block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Everything
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="push-email"
                name="push-notifications"
                type="radio"
                value="email"
                checked={pushNotification === "email"}
                onChange={handlePushNotificationChange}
                className="focus:ring-emerald-500 h-4 w-4 text-emerald-600 border-gray-300"
              />
              <label
                htmlFor="push-email"
                className="ml-3 block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Same as email
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="push-nothing"
                name="push-notifications"
                type="radio"
                value="nothing"
                checked={pushNotification === "nothing"}
                onChange={handlePushNotificationChange}
                className="focus:ring-emerald-500 h-4 w-4 text-emerald-600 border-gray-300"
              />
              <label
                htmlFor="push-nothing"
                className="ml-3 block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                No push notifications
              </label>
            </div>
          </div>
        </fieldset>
      </div>
    </>
  );
};
