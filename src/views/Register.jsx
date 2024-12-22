import React from 'react'
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function Login() {
  return (
    <>
      <h1 className="text-4xl font-bold">S'inscrire</h1>
      <p className="text-gray-500 dark:text-gray-400">Entrez votre email et un mot de passe pour vous inscrire</p>
      <div className="mt-10 flex flex-col w-full space-y-6">
        <div className="w-full">
          <Label htmlFor="email">Email</Label>
          <Input id="email" placeholder="Email" />
        </div>
        <div className="w-full">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" placeholder="Password" />
        </div>
        <div className="w-full">
          <Label htmlFor="confirmPassword">Confirm password</Label>
          <Input id="confirmPassword" type="password" placeholder="Password" />
        </div>
        <Button className="w-full">S'inscrire</Button>
      </div>
    </>
  )
}