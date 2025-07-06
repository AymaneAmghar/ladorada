import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
const ContactForm = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    guests: '2',
    requests: ''
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Here you would typically send the data to your backend
    console.log('Reservation request:', formData);
    toast({
      title: "Reservation Request Sent!",
      description: "We'll contact you shortly to confirm your reservation."
    });

    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      date: '',
      time: '',
      guests: '2',
      requests: ''
    });
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  return <form onSubmit={handleSubmit} className="space-y-6 bg-card rounded-xl p-8 shadow-soft">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-serif font-semibold text-marine-blue mb-2">
          Reserve Your Table
        </h3>
        <p className="text-muted-foreground">
          Book your table for an unforgettable dining experience
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-marine-blue font-medium">
            Full Name *
          </Label>
          <Input id="name" name="name" type="text" required value={formData.name} onChange={handleChange} className="border-ocean-foam focus:border-gold" placeholder="Enter your full name" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone" className="text-marine-blue font-medium">
            Phone Number *
          </Label>
          <Input id="phone" name="phone" type="tel" required value={formData.phone} onChange={handleChange} className="border-ocean-foam focus:border-gold" placeholder="+212 6xx xx xx xx" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-marine-blue font-medium">Email Address * (optional)</Label>
          <Input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} className="border-ocean-foam focus:border-gold" placeholder="your@email.com" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="guests" className="text-marine-blue font-medium">
            Number of Guests
          </Label>
          <select id="guests" name="guests" value={formData.guests} onChange={handleChange} className="w-full px-3 py-2 border border-ocean-foam rounded-md focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20">
            {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12].map(num => <option key={num} value={num}>{num} {num === 1 ? 'Person' : 'People'}</option>)}
          </select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="date" className="text-marine-blue font-medium">
            Preferred Date *
          </Label>
          <Input id="date" name="date" type="date" required value={formData.date} onChange={handleChange} className="border-ocean-foam focus:border-gold" min={new Date().toISOString().split('T')[0]} />
        </div>

        <div className="space-y-2">
          <Label htmlFor="time" className="text-marine-blue font-medium">
            Preferred Time *
          </Label>
          <select id="time" name="time" required value={formData.time} onChange={handleChange} className="w-full px-3 py-2 border border-ocean-foam rounded-md focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20">
            <option value="">Select time</option>
            <option value="12:00">12:00 PM</option>
            <option value="12:30">12:30 PM</option>
            <option value="13:00">1:00 PM</option>
            <option value="13:30">1:30 PM</option>
            <option value="14:00">2:00 PM</option>
            <option value="19:00">7:00 PM</option>
            <option value="19:30">7:30 PM</option>
            <option value="20:00">8:00 PM</option>
            <option value="20:30">8:30 PM</option>
            <option value="21:00">9:00 PM</option>
            <option value="21:30">9:30 PM</option>
            <option value="22:00">10:00 PM</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="requests" className="text-marine-blue font-medium">
          Special Requests
        </Label>
        <Textarea id="requests" name="requests" value={formData.requests} onChange={handleChange} className="border-ocean-foam focus:border-gold min-h-[100px]" placeholder="Any dietary restrictions, celebrations, or special requests..." />
      </div>

      <Button type="submit" variant="reserve" size="xl" className="w-full">
        Submit Reservation Request
      </Button>

      <p className="text-sm text-muted-foreground text-center">
        We'll contact you within 2 hours to confirm your reservation
      </p>
    </form>;
};
export default ContactForm;