import type { Meta, StoryObj } from '@storybook/react';
import { Input, InputProps } from '@enosd-ui/react'; // Adjust the import path as necessary
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/Input',
  component: Input,
  args: {
    placeholder: 'Enter text',
    onChange: action('input-change'),
    size: 'small'
  },
  argTypes: {
    type: {
      options: ['text', 'password', 'email', 'number'],
      control: {
        type: 'select',
      },
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: {
        type: 'radio',
      },
    },
  },
} as Meta<typeof Input>;

const Template: StoryObj<InputProps> = {
  render: (args) => <Input {...args} />, 
};

export const TextInput = {
  ...Template,
  args: {
    type: 'text',
  },
};

export const PasswordInput = {
  ...Template,
  args: {
    type: 'password',
    placeholder: 'Enter password',
  },
};

export const EmailInput = {
  ...Template,
  args: {
    type: 'email',
    placeholder: 'email@example.com',
  },
};

export const NumberInput = {
  ...Template,
  args: {
    type: 'number',
    placeholder: 'Enter a number',
  },
};

export const LargeInput = {
  ...Template,
  args: {
    size: 'large',
    placeholder: 'Large Input',
  },
};

export const MediumInput = {
  ...Template,
  args: {
    size: 'medium',
    placeholder: 'Medium Input',
  },
};

export const SmallInput = {
  ...Template,
  args: {
    size: 'small',
    placeholder: 'Small Input',
  },
};