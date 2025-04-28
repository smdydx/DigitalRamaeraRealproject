
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "@/hooks/use-toast";

export const ServiceEnquiryForm = ({ serviceName }: { serviceName: string }) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    service: serviceName
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contacts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!response.ok) throw new Error('Failed to send enquiry');
      
      toast({
        title: "Enquiry Sent!",
        description: "We'll get back to you soon.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
        service: serviceName
      });
    } catch (error) {
      toast({
        title: "Failed to send",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-zinc-900/50 p-6 rounded-xl border border-zinc-800">
      <h3 className="text-xl font-semibold mb-4">Enquire About {serviceName}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          placeholder="Your Name"
          value={formData.name}
          onChange={e => setFormData({...formData, name: e.target.value})}
          required
        />
        <Input
          type="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={e => setFormData({...formData, email: e.target.value})}
          required
        />
        <Input
          type="tel"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={e => setFormData({...formData, phone: e.target.value})}
          required
        />
        <Input
          placeholder="Company Name"
          value={formData.company}
          onChange={e => setFormData({...formData, company: e.target.value})}
        />
      </div>
      <Textarea
        placeholder="Tell us about your requirements..."
        value={formData.message}
        onChange={e => setFormData({...formData, message: e.target.value})}
        required
      />
      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? "Sending..." : "Submit Enquiry"}
      </Button>
    </form>
  );
};
